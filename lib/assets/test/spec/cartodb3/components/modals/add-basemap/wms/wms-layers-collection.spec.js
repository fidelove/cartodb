var LayersCollection = require('../../../../../../../javascripts/cartodb3/components/modals/add-basemap/wms/wms-layers-collection');
var WMSService = require('../../../../../../../javascripts/cartodb3/data/wms-service');

describe('editor/components/modals/add-basemap/wms/wms-layers-collection', function () {
  beforeEach(function () {
    this.wmsService = new WMSService();
    this.wmsLayersCollection = new LayersCollection(null, {
      wmsService: this.wmsService
    });
    this.wmsLayersCollection.sync = function (a, b, opts) {
    };
  });

  describe('.fetch', function () {
    beforeEach(function () {
      this.url = 'http://openlayers.org/en/v3.5.0/examples/data/ogcsample.xml';
      spyOn(this.wmsLayersCollection._wmsService, 'getFetchLayersURL').and.returnValue(this.url);
      this.wmsLayersCollection.fetch();
    });

    it('should fetch layers from given URL', function () {
      expect(this.wmsLayersCollection._wmsService.getFetchLayersURL).toHaveBeenCalled();
    });
  });
});