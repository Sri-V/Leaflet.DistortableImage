L.DistortableImage = L.DistortableImage || {};

var EditOverlayAction = LeafletToolbar.ToolbarAction.extend({
  initialize: function (map, overlay, options) {
    this._overlay = overlay;
    this._map = map;

    LeafletToolbar.ToolbarAction.prototype.initialize.call(this, options);
  }
}),

  Exports = EditOverlayAction.extend({
    initialize: function (map, group, options) {
      var href = '<use xlink:href="../assets/icons/symbol/sprite.symbol.svg#get_app"></use>';
  
      options = options || {};
      options.toolbarIcon = {
        html: '<svg>' + href + '</svg>',
        tooltip: 'Export Images'
      };

      EditOverlayAction.prototype.initialize.call(this, map, group, options);
    },

    addHooks: function () {
        console.log(this);
        window.this = this;
        
        var group = this._overlay;

        group.startExport();
    //   var editing = this._overlay.editing;

    //   editing._getExport();
    //   this.disable();
    }
  }),

  Deletes = EditOverlayAction.extend({
    initialize: function(map, overlay, options) {
      var href = '<use xlink:href="../assets/icons/symbol/sprite.symbol.svg#delete_forever"></use>';

      options = options || {};
      options.toolbarIcon = {
        html: '<svg>' + href + '</svg>',
        tooltip: 'Delete Images'
      };

      EditOverlayAction.prototype.initialize.call(this, map, overlay, options);
    },

    addHooks: function() {
    //   var editing = this._overlay.editing;
    //   var eP = this.

    //   editing._removeOverlay();
    //   this.disable();
    }
  });

L.DistortableImage.EditToolbar2 = LeafletToolbar.Control.extend({
  options: {
      actions: [
          Exports,
          Deletes
      ]
  },
});