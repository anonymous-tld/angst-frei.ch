json_template = '/timeline-data/'
var options = {
  language: "de",
  width: "100%",
  height: "100%",
  slide_padding_lr: 100,
  hash_bookmark: true,
  start_at_end: true
}
window.timeline = new TL.Timeline('timeline-embed', json_template, options);
