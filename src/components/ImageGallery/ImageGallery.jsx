import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/modal.styled';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ image }) => {
  return (
    <>
      <List>
        {image.map(im => (
          <ImageGalleryItem key={im.id} image={im} />
        ))}
      </List>
      <Modal image={image.largeImageURL} />
    </>
  );
};
