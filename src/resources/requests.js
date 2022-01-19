import RequestApi from '@devo/applications-data-library/requests/RequestApi';
import requests from '@devo/applications-builder/data/requests';
import dateRange from '@devo/applications-builder/utils/dateRange';

requests.add(
  'responseTimeOf1Hour',
  new RequestApi({
    query: `from siem.logtrust.web.activity
    group every 30m by domain, username every 30m
    select count() as count, max(responseTime) as responseTime`,
    dates: dateRange.fromNow(1, 'day'),
  })
);

requests.add(
  'voronoi',
  new RequestApi({
    query: `from siem.logtrust.collector.counter
    where kind = "table"
    select split(object, ".", 0) as tech
    select split(object, ".", 1) as subtech
    select split(object, ".", 2) as type
    select split(object, ".", 3) as subtype
    group by tech, subtech, type, subtype
    select sum(bytes) as sum`,
    dates: dateRange.fromNow(1, 'day'),
  })
);
