import Tab from '@devoinc/applications-builder/Tab';
import Section from '@devoinc/applications-builder/Section';

import requests from '@devoinc/applications-builder/data/requests';
import linesWidget from '@devoinc/applications-builder/widgets/lines';

export default () => {
  // Tab
  // ---------------------------------------------------------------------------

  let tab = new Tab('main2');

  // Section
  // ---------------------------------------------------------------------------

  let sec1 = new Section('section21');
  tab.addSection(sec1);

  let widget = null;

  // SECTION 21
  // ===========================================================================

  widget = linesWidget('linesWidget');
  widget.setRequests([requests.get('responseTimeOf1Hour')]);
  widget.setUseMainRequestForSearch();
  widget.setKeys('domain');
  widget.setValue('count');

  sec1.addWidget(widget);

  return tab;
};
