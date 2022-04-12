import Tab from '@devoinc/applications-builder/Tab';
import Section from '@devoinc/applications-builder/Section';

import stackedBarsWidget from '@devoinc/applications-builder/widgets/stackedBars';
import voronoiWidget from '@devoinc/applications-builder/widgets/voronoi';

import requests from '@devoinc/applications-builder/data/requests';

export default () => {
  // Tab
  // ---------------------------------------------------------------------------

  let tab = new Tab('main1');

  // Section
  // ---------------------------------------------------------------------------

  let sec1 = new Section('section11');
  let sec2 = new Section('section12');

  tab.addSection(sec1);
  tab.addSection(sec2);

  let widget = null;

  // SECTION 1
  // ===========================================================================

  // Widget: StackedBar
  // ---------------------------------------------------------------------------

  widget = stackedBarsWidget('stackedBarWidget');
  widget.setRequests([requests.get('responseTimeOf1Hour')]);
  widget.setUseMainRequestForSearch();
  widget.setKeys('username');
  widget.setValue('count');
  sec1.addWidget(widget);

  // SECTION 2
  // ===========================================================================

  // Widget: Voronoi
  // ---------------------------------------------------------------------------

  widget = voronoiWidget('voronoiWidget');
  widget.setRequests([requests.get('voronoi')]);
  widget.setUseMainRequestForSearch();
  widget.setValue(['sum']);
  widget.setMaxItems(10000);
  widget.setLayout('squarified');
  widget.setKeys(['tech', 'subtech', 'type', 'subtype']);
  sec2.addWidget(widget);

  // ===========================================================================

  return tab;
};
