import React, {PropTypes} from 'react';

class ImageViewer extends React.Component {
  static propTypes = {
    file: PropTypes.object.isRequired,
    baseUrl: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  }

  constructor(props) {
      super(props);

      this.baseApiUrl = props.baseApiUrl || 'https://api.dripr.io';
      this.baseUrl = props.baseUrl || 'https://dripr.io';

  }

  render() {
    return (<div className="dripr-viewer-card" style={{width: this.props.width || '400px'}}>
      <div className="dripr-viewer-card-header" style={{height: this.props.height || '300px'}}>
        <div className="dripr-viewer-card-header__avatar" style={{backgroundImage: 'url(' + this.props.file.url + ')'}}></div><a href={ this.baseUrl + '/file/' + this.props.file.hash} target="_blank" className="dripr-viewer-card-header__follow">More</a>
      </div>
      <div className="dripr-viewer-card-footer">
        <div className="dripr-viewer-card-footer__pens"> <span>0</span>
          <div className="dripr-viewer-label">Followers</div>
        </div>
        <div className="dripr-viewer-card-footer__followers"> <span>{this.props.file.views} </span>
          <div className="dripr-viewer-label">Views</div>
        </div>
        <div className="dripr-viewer-card-footer__following"> <span>{this.props.file.comments} </span>
          <div className="dripr-viewer-label">Comments</div>
        </div>
      </div>
    </div>);
  }
}

export default ImageViewer;
