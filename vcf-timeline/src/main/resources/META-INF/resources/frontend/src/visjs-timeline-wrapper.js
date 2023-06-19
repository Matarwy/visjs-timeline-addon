// Example usage
// Vanilla wrapper for Vis.js Timeline library
class TimelineWrapper {
    constructor(container, items, options) {
      this.container = container;
      this.items = items;
      this.options = options;
      this.timeline = null;
  
      this.initializeTimeline();
    }
  
    initializeTimeline() {
      this.timeline = new vis.Timeline(this.container, this.items, this.options);
    }
  
    addEventListener(eventType, callback) {
      this.timeline.on(eventType, callback);
    }
