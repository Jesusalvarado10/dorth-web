/**
 * PhotoGallery.tsx
 * Upload, view, and delete personal photos with a lightbox viewer.
 */

import { useState } from 'react';

export interface GalleryImage {
  id:   string;
  url:  string;
  name: string;
}

interface PhotoGalleryProps {
  images:         GalleryImage[];
  onImagesChange: (images: GalleryImage[]) => void;
}

export default function PhotoGallery({ images, onImagesChange }: PhotoGalleryProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  // ── Handlers ──────────────────────────────────────────
  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files ?? []).forEach((file) => {
      const img: GalleryImage = {
        id:   crypto.randomUUID(),
        url:  URL.createObjectURL(file),
        name: file.name,
      };
      onImagesChange([...images, img]);
    });
    e.target.value = '';
  };

  const handleDelete = (id: string) => {
    onImagesChange(images.filter((img) => img.id !== id));
  };

  // ── Render ────────────────────────────────────────────
  return (
    <>
      <div className="gallery-grid">
        {/* Existing photos */}
        {images.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.url} alt={img.name} />
            <div className="gallery-overlay">
              <button
                className="gallery-btn"
                onClick={() => setLightbox(img.url)}
                aria-label={`View ${img.name}`}
                title="View full size"
              >
                🔍
              </button>
              <button
                className="gallery-btn"
                onClick={() => handleDelete(img.id)}
                aria-label={`Delete ${img.name}`}
                title="Delete photo"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}

        {/* Add photo button */}
        <label className="gallery-add" id="add-photo-btn">
          <span style={{ fontSize: 32, opacity: 0.4 }}>＋</span>
          <span>Add photo</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAdd}
            aria-label="Upload photos to gallery"
          />
        </label>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Full size photo"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Full size view"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
