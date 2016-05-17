import React, {PropTypes} from 'react';

import fetch from 'isomorphic-fetch';
import ImageViewer from './Viewers/ImageViewer';

class DriprViewer extends React.Component {
  static propTypes = {
    fileId: PropTypes.string.isRequired,
    apiKey: PropTypes.string,
    baseUrl: PropTypes.string,
    baseApiUrl: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  }

  constructor(props) {
      super(props);
      this.state = {
        file: false
      };

      this.baseApiUrl = props.baseApiUrl || 'https://api.dripr.io';
      this.baseUrl = props.baseUrl || 'https://dripr.io';
      this.getFile(props.fileId, props.apiKey);
  }

  getFile(fileId, apiKey) {
    let options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    if(this.props.apiKey) {
      options.headers.Authorization = 'Bearer ' + apiKey;
    }

    fetch(this.baseApiUrl + '/files/' + fileId, options).then(response => response.json()).then(json => this.setState({file: json})).catch(error => console.log(error));
  }

  processFile(file) {
    switch(file.type) {
      case 'image':
        return <ImageViewer file={file} {...this.props} />
      default:
        return (
          <div>Viewer not found</div>
        );
    }
  }

  render() {
    const file = this.state.file;
    if (!file) {
      return null;
    }

    return this.processFile(file);
  }
}

export default DriprViewer;
