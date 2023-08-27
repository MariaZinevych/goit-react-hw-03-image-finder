import { List } from './ImageGalleryitem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <>
      <List>
        <img src={image.webformatURL} alt={image.tags} />
      </List>
    </>
  );
};
