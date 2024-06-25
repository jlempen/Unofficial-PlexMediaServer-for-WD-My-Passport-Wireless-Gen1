(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1721:function(r,a,e){"use strict";e.r(a);var t=e(9),E=e.n(t),o=e(7),s=e.n(o),n=e(1718),R=e.n(n),l=(e(4),e(1)),i=e.n(l),c=e(17),_=e(2),D=e(431),O=i.a.createElement;function A(r){switch(r.details){case R.a.ErrorDetails.MANIFEST_LOAD_ERROR:case R.a.ErrorDetails.MANIFEST_LOAD_TIMEOUT:case R.a.ErrorDetails.MANIFEST_PARSING_ERROR:return Object(_.default)("Manifest");case R.a.ErrorDetails.LEVEL_LOAD_ERROR:case R.a.ErrorDetails.LEVEL_LOAD_TIMEOUT:case R.a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case R.a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case R.a.ErrorDetails.FRAG_LOAD_ERROR:case R.a.ErrorDetails.FRAG_LOAD_TIMEOUT:case R.a.ErrorDetails.KEY_LOAD_ERROR:case R.a.ErrorDetails.KEY_LOAD_TIMEOUT:return Object(_.default)("Network");case R.a.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR:case R.a.ErrorDetails.FRAG_DECRYPT_ERROR:case R.a.ErrorDetails.FRAG_PARSING_ERROR:case R.a.ErrorDetails.BUFFER_ADD_CODEC_ERROR:case R.a.ErrorDetails.BUFFER_APPEND_ERROR:case R.a.ErrorDetails.BUFFER_APPENDING_ERROR:case R.a.ErrorDetails.BUFFER_STALLED_ERROR:case R.a.ErrorDetails.BUFFER_FULL_ERROR:case R.a.ErrorDetails.BUFFER_SEEK_OVER_HOLE:case R.a.ErrorDetails.BUFFER_NUDGE_ON_STALL:return Object(_.default)("Media");case R.a.ErrorDetails.REMUX_ALLOC_ERROR:case R.a.ErrorDetails.LEVEL_SWITCH_ERROR:case R.a.ErrorDetails.INTERNAL_EXCEPTION:return Object(_.default)("Player")}}var L=function(r){function a(a,e){var t;return(t=r.call(this,a,e)||this).onElementChange=function(r){t._hls=new R.a({maxMaxBufferLength:30}),t._hls.on(R.a.Events.MEDIA_ATTACHED,t.onMediaAttached),t._hls.on(R.a.Events.MANIFEST_PARSED,t.onManifestParsed),t._hls.on(R.a.Events.ERROR,t.onError),t._hls.attachMedia(r)},t.onHTMLError=function(){},t.onMediaAttached=function(){t._hls.loadSource(t.props.src)},t.onManifestParsed=function(){t.setState({isReadyToPlay:!0})},t.onError=function(r,a){var e=a.type,E=a.details,o=a.fatal,s=E;o&&e===R.a.ErrorTypes.NETWORK_ERROR?(c.a.warn("[Player] A critical HLSjs network error occurred: "+s+"; the player will restart the load"),t._hls.startLoad()):o&&e===R.a.ErrorTypes.MEDIA_ERROR?(c.a.warn("[Player] A critical HLSjs media error occurred: "+s+"; the player will attempt to recover"),t._hls.recoverMediaError()):o?(c.a.warn("[Player] A critical HLSjs error occurred: "+s+"; the player cannot recover"),t.props.onError&&t.props.onError({category:A(a)})):c.a.warn("[Player] A non-critical HLSjs error occurred: "+s)},t.state={isReadyToPlay:!1},t}s()(a,r);var e=a.prototype;return e.componentWillUnmount=function(){this._hls.destroy(),this._hls=null},e.render=function(){return O(D.a,E()({},this.props,{isReadyToPlay:this.state.isReadyToPlay,onElementChange:this.onElementChange,onHTMLError:this.onHTMLError}))},a}(i.a.Component);a.default=L}}]);