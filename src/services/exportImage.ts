import { toPng, toJpeg, toBlob } from 'html-to-image';

export type ImageFormat = 'png' | 'jpeg';
export type ExportResolution = 1 | 2 | 3; // 1x (1080p), 2x (2160p QuadHD), 3x (3240p Ultra)

export interface ExportOptions {
  format: ImageFormat;
  resolution: ExportResolution;
  quality?: number; // 0.1 to 1.0 (for JPEG)
  fileName?: string;
}

export async function downloadCardImage(
  element: HTMLElement,
  options: ExportOptions
): Promise<void> {
  const { format, resolution, quality = 0.95, fileName = 'photocard' } = options;

  const exportOptions = {
    pixelRatio: resolution,
    quality: format === 'jpeg' ? quality : undefined,
    cacheBust: true,
    filter: (node: Node) => {
      // Exclude elements with data-no-export attribute
      if (node instanceof HTMLElement && node.dataset.noExport === 'true') {
        return false;
      }
      return true;
    }
  };

  let dataUrl: string;
  if (format === 'jpeg') {
    dataUrl = await toJpeg(element, exportOptions);
  } else {
    dataUrl = await toPng(element, exportOptions);
  }

  const link = document.createElement('a');
  link.download = `${fileName}-${Date.now()}.${format}`;
  link.href = dataUrl;
  link.click();
}

export async function copyCardToClipboard(element: HTMLElement): Promise<boolean> {
  try {
    const blob = await toBlob(element, { pixelRatio: 2, cacheBust: true });
    if (!blob) return false;

    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': blob
      })
    ]);
    return true;
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    return false;
  }
}
