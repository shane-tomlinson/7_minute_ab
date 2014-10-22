/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

describe('client', function () {
  describe('etsy style', function () {
    // https://github.com/etsy/feature

    describe('isEnabled', function () {
      it('checks if a feature is enabled', function () {
        if (experiment.isEnabled('feature_name')) {
          // use feature here.
        }
      });
    });

    describe('variant', function () {
      it('gets a variant for a feature', function () {
        if (experiment.isEnabled('feature_name')) {
          var value = experiment.variant('feature_name');
          // use value here.
        }
      });
    });
  });


  describe('sixpack style', function () {
    // https://github.com/seatgeek/sixpack-js

    describe('participate', function () {
      it('gets a variant', function () {
        experiment.participate('feature_name', ['option1', 'option2'], function (err, res) {
          if (err) throw err;

          var value = res.alternative.name;
          // use value here.
        });
      });
    });
  });


  describe('proctor style', function () {
    // http://indeedeng.github.io/proctor/docs/quick-start/

    describe('get', function () {
      it('gets a variant', function () {
        // lots of setup before this.
        var value = experiment.get('feature_name');
      });
    });
  });


  describe('redfin style', function () {
    // http://blog.redfin.com/devblog/2014/02/a-b-testing-build-or-buy.html
    // unable to find a link to their library
  });


  describe('waffle style', function () {
    // http://waffle.readthedocs.org/en/latest/usage.html#wafflejs-view

    /**
     * From http://waffle.readthedocs.org/en/latest/types.html:
     *
     * A Flag is tied to a request, while Switches and Samples are
     * not. Consequently, Flags are much more complicated, while Switches are
     * just a named boolean in the database, and Samples are just a percentage
     * stored in the database.
     */

    describe('flag_is_active', function () {
      it('returns a boolean', function () {
        if (experiment.flag_is_active(request, 'feature_name')) {
          // flag is active
        } else {
          // flag is inactive
        }
      });
    });

    describe('switch_is_active', function () {
      it('returns a boolean', function () {
        if (experiment.switch_is_active('feature_name')) {
          // switch is active
        } else {
          // switch is inactive
        }
      });
    });

    describe('sample_is_active', function () {
      it('returns a boolean', function () {
        if (experiment.sample_is_active('feature_name')) {
          // sample is active
        } else {
          // sample is inactive
        }
      });
    });
  });


  describe('optimizely style', function () {
    // http://developers.optimizely.com/javascript/

    describe('what a mess', function () {
    });
  });


  describe('vanity style', function () {
    // http://vanity.labnotes.org/ab_testing.html

    describe('ab_test', function () {
      it('can return a boolean', function () {
        if (experiments.ab_test('feature_name')) {
          // feature is active
        }
      });

      it('can return one of several options', function () {
        // options setup externally

        var value = experiments.ab_test('feature_name');
      });
    });
  });


  describe('cohorts style', function () {
    // https://github.com/jamesyu/cohorts/

    describe('Cohorts.Test', function () {
      var test = new Cohorts.Test({
        name: 'feature_name',
        sample: 1, // include all visitors in the test
        cohorts: {
          option1: {
            onChosen: function () {
              // do something like show a DOM element.
            }
          },
          option2: {
            onChosen: function () {
              // do something like show another DOM element.
            }
          }
        }
      });
    });

    describe('inChorhort', function () {
      it('returns a boolean - based on Cohorts.Test setup above', function () {
        var isInCohort = test.inCohort('option1');
      });
    });

    describe('getCohort', function () {
      it('returns a cohort name - based on Cohorts.Test setup above', function () {
        var cohortName = test.getChorhort();
        // cohortName is either `option1` or `option2`
      });
    });
  });


  describe('google style', function () {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/experiments

    describe('chooseVariation', function () {
      it('chooses a variation for the user', function () {
        // experiment ID is set up when loading the client.

        var value = experiments.chooseVariation();
      });
    });

    describe('getChosenVariation', function () {
      it('gets a previously chosen variation for the user', function () {
        var value = experiments.chooseVariation('experiment_id');
      });
    });
  });

});


