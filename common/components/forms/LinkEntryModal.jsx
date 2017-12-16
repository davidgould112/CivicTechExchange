// @flow

import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import type { LinkInfo } from './LinkInfo.jsx'

type Props = {|
  showModal: boolean,
  linkInfo: LinkInfo,
  onSaveLink: (LinkInfo) => null
|};
type State = {|
  showModal: boolean,
  linkInfo: LinkInfo,
|};

/**
 * Modal for adding/editing hyperlinks
 */
class LinkEntryModal extends React.PureComponent<Props,State> {
  close: Function;
  save: Function;
  handleChange: Function;
  
  constructor(props: Props): void {
    super(props);
    this.state = {
      showModal: false,
      linkInfo: {
        linkUrl: "",
        linkName: ""
      }
    }
  
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  resetModal(url:?string, name:?string): void {
    this.setState({ "linkInfo": {
      linkUrl: url || "",
      linkName: name || ""
    }});
  }
  
  componentWillReceiveProps(nextProps: Props): void {
    this.setState({ showModal: nextProps.showModal });
  
    if(nextProps.existingLink) {
      this.resetModal(nextProps.existingLink.linkUrl,nextProps.existingLink.linkName);
    } else {
      this.resetModal();
    }
  }
  
  close(): void {
    this.setState({showModal: false});
  }
  
  save(): void {
    //Sanitize link
    this.state.linkInfo.linkUrl = this.sanitizeUrl(this.state.linkInfo.linkUrl);
    
    this.props.onSaveLink(this.state.linkInfo);
    this.close();
  }
  
  // TODO: Put this in a common library
  sanitizeUrl(url:string): string {
    // TODO: Find a library that can handle this so we don't have to maintain regexes
    if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
    }
    return url;
  }
  
  handleChange(event: SyntheticInputEvent<HTMLInputElement>, propertyName: string): void {
    this.state.linkInfo[propertyName] = event.target.value;
    this.forceUpdate();
  }
  
  render(): React$Node {
    return (
      <div>
          <Modal show={this.state.showModal}
                 onHide={this.close}
                 backdrop="true"
          >
              <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <label for="link-url">Link URL</label>
                  <input type="text" class="form-control" id="link-url" value={this.state.linkInfo.linkUrl} onChange={(e) => this.handleChange(e, "linkUrl")}/>
                  <label for="link-name">Link Name</label>
                  <input type="text" class="form-control" id="link-name" value={this.state.linkInfo.linkName} onChange={(e) => this.handleChange(e, "linkName")}/>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                  <Button disabled={!this.state.linkInfo.linkUrl} onClick={this.save}>Save</Button>
              </Modal.Footer>
          </Modal>
      </div>
    );
  }
}

export default LinkEntryModal;