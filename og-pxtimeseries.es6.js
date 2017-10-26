(function() {
  Polymer({

    is: 'og-pxtimeseries',

    properties: {
      /**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */
      timeSeriesData: {
        type: Array,
        notify: true
      },

      seriesConfig: {
        type: Array,
        notify: true
      //{"y0":{"name":"Access","x":"timeStamp","y":"y0","yAxisUnit":"","strokeWidth":"3","axis":{"id":"axis1","side":"left","number":"1"}},"y1":{"name":"Endpoint","x":"timeStamp","y":"y1","yAxisUnit":"","strokeWidth":"3","axis":{"id":"axis1","side":"left","number":"1"}},"y2":{"name":"Network","x":"timeStamp","y":"y2","yAxisUnit":"","strokeWidth":"3","axis":{"id":"axis1","side":"left","number":"1"}},"y3":{"name":"Identity","x":"timeStamp","y":"y3","yAxisUnit":"","strokeWidth":"3","axis":{"id":"axis1","side":"left","number":"1"}},"y4":{"name":"Audit","x":"timeStamp","y":"y4","yAxisUnit":"","strokeWidth":"3","axis":{"id":"axis1","side":"left","number":"1"}},"y5":{"name":"Threat","x":"timeStamp","y":"y5","yAxisUnit":"","strokeWidth":"3","axis":{"id":"axis1","side":"left","number":"1"}}}
    },
    disableNavigator: {
      type: Boolean,
      notify: true
    }
    },

    /**
    * Handles click on the element defined in 'on-click' on the template.
    *
    * @method handleClick
    */
    handleClick: function(event, detail, sender) {
      this.increment();
    }
  });
})();
