import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ image }) => {
  return (
    <>
      <ul>
        {image.map(im => (
          <ImageGalleryItem key={im.id} image={im} />
        ))}
      </ul>
    </>
  );
};
