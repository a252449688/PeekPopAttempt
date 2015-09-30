'use strict';

var React = require('react-native');
var {
  View,
  PropTypes,
  StyleSheet,
  NativeModules,
  requireNativeComponent,
} = React;
var { RNPreviewViewManager } = NativeModules;

var RN_PREVIEW_VIEW_REF = 'native-preview-view-ref';

var PreviewView = React.createClass({
  propTypes: {},

  activate() {
    RNPreviewViewManager.activate(this.getRootNodeHandle());
  },

  getRootNodeHandle() {
    return React.findNodeHandle(this.refs[RN_PREVIEW_VIEW_REF]);
  },

  render() {
    return (
      <RNPreviewView ref={RN_PREVIEW_VIEW_REF}>
        {React.Children.map(this.props.children, React.addons.cloneWithProps)}
      </RNPreviewView>
    );
  },
});

var RNPreviewView = requireNativeComponent('RNPreviewView', PreviewView);

module.exports = PreviewView;
