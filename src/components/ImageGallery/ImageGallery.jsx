import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

import { fetchImages } from '../services/fetchImages';

export class ImageGallery extends Component {
  state = { images: [] };

  componentDidUpdate(prevProps) {
    const { query, page, setStatus } = this.props;
    if (query !== prevProps.query) this.setState({ images: [] });
    if (query !== prevProps.query || page !== prevProps.page) {
      setStatus('loading');
      fetchImages({ query, page, setStatus }).then(data => {
        if (data.hits.length < 1) {
          setStatus('rejected');
        } else {
          setStatus('resolved');
        }
        this.setState(state => {
          return { images: [...state.images, ...data.hits] };
        });
      });
    }
  }
  render() {
    const { images } = this.state;
    return (
      <Gallery>
        {images.map(item => {
          return <ImageGalleryItem key={item.id} item={item} />;
        })}
      </Gallery>
    );
  }
}

//   <Gallery>
//     <ImageGalleryItem />
//   </Gallery>;
