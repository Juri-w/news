# Nextcloud News app
![Release status](https://github.com/nextcloud/news/workflows/Build%20and%20publish%20app%20release/badge.svg) ![Integration Tests](https://github.com/nextcloud/news/workflows/Integration%20Tests/badge.svg) ![Frontend tests](https://github.com/nextcloud/news/workflows/Frontend%20tests/badge.svg)

The News app is an RSS/Atom feed aggregator. It offers a [RESTful API](https://nextcloud.github.io/news/developer/#apis) for app developers. The source code is [available on GitHub](https://github.com/nextcloud/news)

You can install it via the integrated app store browser in Nextcloud, [News in the appstore](https://apps.nextcloud.com/apps/news).

## Documentation
The documentation can be found [here](https://nextcloud.github.io/news/), the source of the documentation is on [GitHub](https://github.com/nextcloud/news/blob/master/docs)

### Common Guides

There are some small guides for dealing with common setup and issues.

* [Troubleshooting Guide](docs/troubleshooting.md)
* [Integration Guide](docs/features/integration.md)


## Bugs
Please read the [appropriate section in the contributing notices](https://github.com/nextcloud/news/blob/master/CONTRIBUTING.md#issues)

## Updating Notices
To receive notifications when a new News app version was released, simply add the following Atom feed in your currently installed News app:

    https://github.com/nextcloud/news/releases.atom

## Screenshots
![](https://raw.githubusercontent.com/nextcloud/news/master/screenshots/1.png)

## Maintainers

* [Benjamin Brahmer](https://github.com/Grotax)
* [Sean Molenaar](https://github.com/SMillerDev)

### Special thanks to the Feed-IO library
Feed-io takes care of fetching feeds and processing them.
[alexdebril/feed-io](https://github.com/alexdebril/feed-io)
