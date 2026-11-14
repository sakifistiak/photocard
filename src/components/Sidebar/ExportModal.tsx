import React, { useState } from 'react';
import {
  downloadCardImage,
  copyCardToClipboard,
  ImageFormat,
  ExportResolution
} from '../../services/exportImage';
import { Download, Copy, Check, X, Sparkles, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cardRef: React.RefObject<HTMLDivElement | null>;
  headline: string;
}

export const ExportModal: React.FC<Props> = ({
  isOpen,
  onClose,
  cardRef,
  headline
}) => {
  const [format, setFormat] = useState<ImageFormat>('png');
  const [resolution, setResolution] = useState<ExportResolution>(2);
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      setStatusMsg('ফটোকার্ড রেন্ডার হচ্ছে...');
      const cleanFileName = (headline || 'photocard')
        .slice(0, 30)
        .replace(/[^a-zA-Z0-9\u0980-\u09FF]/g, '-');

      await downloadCardImage(cardRef.current, {
        format,
        resolution,
        fileName: cleanFileName
      });

      setStatusMsg('সফলভাবে ডাউনলোড হয়েছে!');
      setTimeout(() => {
        setIsExporting(false);
        setStatusMsg(null);
        onClose();
      }, 1200);
    } catch (err) {
      console.error(err);
      setStatusMsg('ডাউনলোড করতে সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।');
      setIsExporting(false);
    }
  };

  const handleCopy = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      setStatusMsg('ক্লিপবোর্ডে কপি করা হচ্ছে...');
      const success = await copyCardToClipboard(cardRef.current);
      if (success) {
        setCopied(true);
        setStatusMsg('ক্লিপবোর্ডে কপি হয়েছে! সরাসরি পেস্ট করুন।');
        setTimeout(() => {
          setCopied(false);
          setIsExporting(false);
          setStatusMsg(null);
        }, 2000);
      } else {
        setStatusMsg('ব্রাউজারে কপি সমর্থন করছে না। ডাউনলোড বাটন ব্যবহার করুন।');
        setIsExporting(false);
      }
    } catch (err) {
      console.error(err);
      setStatusMsg('কপি করা সম্ভব হয়নি।');
      setIsExporting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="modal-icon-badge">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="modal-title">ফটোকার্ড ডাউনলোড করুন (Export Card)</h3>
              <p className="modal-sub">হাই-রেজোলিউশন ক্রিস্প ইমেজ তৈরি করুন</p>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Format Selection */}
          <div className="form-group">
            <label className="form-label">ইমেজ ফরম্যাট (Format)</label>
            <div className="tab-pills">
              <button
                type="button"
                onClick={() => setFormat('png')}
                className={`pill-btn ${format === 'png' ? 'active' : ''}`}
              >
                <strong>PNG</strong> (সর্বোচ্চ কোয়ালিটি)
              </button>
              <button
                type="button"
                onClick={() => setFormat('jpeg')}
                className={`pill-btn ${format === 'jpeg' ? 'active' : ''}`}
              >
                <strong>JPEG</strong> (কম ফাইল সাইজ)
              </button>
            </div>
          </div>

          {/* Resolution Selection */}
          <div className="form-group">
            <label className="form-label">রেজোলিউশন ও কোয়ালিটি (Resolution)</label>
            <div className="resolution-options">
              <button
                type="button"
                onClick={() => setResolution(1)}
                className={`res-btn ${resolution === 1 ? 'active' : ''}`}
              >
                <span className="res-title">1x (Standard HD)</span>
                <span className="res-desc">1080p • দ্রুত ডাউনলোড</span>
              </button>
              <button
                type="button"
                onClick={() => setResolution(2)}
                className={`res-btn ${resolution === 2 ? 'active' : ''}`}
              >
                <span className="res-badge">প্রস্তাবিত</span>
                <span className="res-title">2x (Quad HD 2K)</span>
                <span className="res-desc">2160p • সোশ্যাল মিডিয়ার জন্য সেরা</span>
              </button>
              <button
                type="button"
                onClick={() => setResolution(3)}
                className={`res-btn ${resolution === 3 ? 'active' : ''}`}
              >
                <span className="res-title">3x (Ultra HD 4K)</span>
                <span className="res-desc">3240p • প্রিন্ট ও সর্বোচ্চ স্পষ্টতা</span>
              </button>
            </div>
          </div>

          {/* Status Message */}
          {statusMsg && (
            <div className="export-status-banner">
              {isExporting ? <Loader2 size={16} className="spin-icon" /> : <Check size={16} />}
              <span>{statusMsg}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="modal-actions-grid">
            <button
              onClick={handleCopy}
              disabled={isExporting}
              className="btn-secondary"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'কপি হয়েছে' : 'ক্লিপবোর্ডে কপি করুন'}</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="btn-primary"
            >
              {isExporting ? (
                <>
                  <Loader2 size={16} className="spin-icon" />
                  <span>তৈরি হচ্ছে...</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>ডাউনলোড করুন ({format.toUpperCase()})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
