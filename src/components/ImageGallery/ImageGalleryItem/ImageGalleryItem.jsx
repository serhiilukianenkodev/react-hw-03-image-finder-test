import { Component } from 'react';
import { Card, CardImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };
  render() {
    const { previewURL, tags, largeImageURL } = this.props.item;

    return (
      <Card>
        <CardImg src={previewURL} alt={tags} />
      </Card>
    );
  }
}
