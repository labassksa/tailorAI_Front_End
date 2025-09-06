import { Dialog } from '@headlessui/react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  prompt?: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, prompt }: ImageModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-5xl max-h-[90vh] rounded-lg group">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {prompt && (
            <div className="absolute top-4 left-4 z-10 bg-purple-600/90 px-4 py-2 rounded-full text-sm md:text-base font-medium text-white shadow-md animate-[fadeInUp_0.5s_ease-out] hover:scale-105 transition-transform">
              <span className="inline-block animate-[bounce_1s_ease-in-out_infinite]">✨</span> Prompt: "{prompt}" <span className="inline-block animate-[bounce_1s_ease-in-out_infinite] delay-100">✨</span>
            </div>
          )}
          <div className="relative w-full h-[80vh] overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              priority
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 