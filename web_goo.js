(function() {
var gliftWidget = undefined;
var currentCodeFunc = function() {};
var getContent = function(hash) {
  var value = hash;
  if (hash === undefined || hash === "") {
    value = 'Home'
  }
  gliftWidget !== undefined && gliftWidget.destroy();
  $('#glift_display1').html("");
  $('#extra_content').html("");
  switch(value) {
    case 'Home':
      $('#extra_content').append("<p style='font-size:medium'>" +
        "Glift is a new Javascript library for the game Go, " +
        "created for desktop and mobile devices.  " +
        "If you would like to see what Glift is about, " +
        "check out the examples or the lessons.</p>");
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          sgf: {
            sgfString: "(;FF[4]GM[1]SZ[19]CA[UTF-8]SO[Glift]EV[]PB[Chen Yaoye]BR[9p]PW[Tan Xiao]WR[7p]KM[7.5]DT[2013-11-18]RE[B+0.5];B[qd];W[dc];B[pq];W[dq];B[nc];W[co];B[qk];W[jp];B[de];W[cg];B[cc];W[gl];B[dd];W[db];B[fd];W[hc];B[cf];W[dh];B[cb];W[mp];B[po];W[kc];B[dk];W[bf];B[be];W[df];B[ce];W[dm];B[fk];W[gh];B[hk];W[gn];B[hq];W[jq];B[eq];W[dr];B[io];W[im];B[jo];W[ko];B[jm];W[jn];B[in];W[kn];B[hm];W[il];B[hl];W[od];B[jk];W[oc])",
            widgetType: 'EXAMPLE',
            icons: [],
            initialPosition: 50,
            componentsToUse: ['BOARD']
          }
        });
      }
      break;
    case 'GameEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: "glift_display1",
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          }
        });
      };
      break;
    case 'ProblemEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgfList: [
              testdata.sgfs.complexproblem,
              testdata.sgfs.realproblem
          ],
          sgfDefaults: {
            widgetType: 'STANDARD_PROBLEM'
          },
          divId: "glift_display1",
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          }
        });
      };
      break;
    case 'ProblemEx2':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            sgfString: testdata.sgfs.gogameguru_hard,
            widgetType: 'STANDARD_PROBLEM'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'BoardEditorEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            sgfString: '',
            widgetType: 'BOARD_EDITOR'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'MarksEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            sgfString: testdata.sgfs.marktest,
            icons: []
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'Kogos':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/Kogos.sgf',
          divId: "glift_display1"
        });
      };
      break;
    case 'TMLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          sgfList: [{
              url: "testdata/tm_lesson/19pt_1.sgf",
              widgetType: 'EXAMPLE'
            },{
              url: "testdata/tm_lesson/19pt_2.sgf",
              widgetType: 'EXAMPLE'
            },{
              url: "testdata/tm_lesson/19pt_correctjoseki_blacktoplay.sgf",
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            },{
              url: "testdata/tm_lesson/19pt_obviousnext.sgf",
              initialPosition: "1"
            },
            "testdata/tm_lesson/19pt_thesacrifice.sgf",
            "testdata/tm_lesson/19pt_thesacrificept2.sgf",
            "testdata/tm_lesson/19pt_thesacrificept3.sgf",
            "testdata/tm_lesson/19pt_thesacrificept3_alternate.sgf",
            {
              url: "testdata/tm_lesson/19pt_thesacrificept3_mistake.sgf",
              initialPosition: "1"
            },{
              url: "testdata/tm_lesson/19pt_thesacrifice_afterwards.sgf",
              widgetType: 'EXAMPLE'
            },{
              url: "testdata/tm_lesson/19pt_correctnext_press.sgf",
              initialPosition: "1",
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            },{
              url: "testdata/tm_lesson/19pt_correctnext_press2.sgf",
              initialPosition: "1"
            },{
              url: "testdata/tm_lesson/19pt_correctnext_nopress.sgf",
              initialPosition: "1",
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            },{
              url: "testdata/tm_lesson/19pt_correctnext_attach.sgf",
              initialPosition: "1"
            },{
              url: "testdata/tm_lesson/19pt_correctnext_attach2.sgf",
              initialPosition: "1"
            },{
              url: "testdata/tm_lesson/19pt_partingthoughts.sgf",
              widgetType: 'EXAMPLE'
            }
          ],
          sgfDefaults: {
            widgetType: 'STANDARD_PROBLEM'
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          }
        });
      };
      break;
    case 'GGGLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          allowWrapAround: false,
          sgfDefaults: {
            widgetType: 'EXAMPLE'
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png',
          },
          sgfList: [
            'testdata/ggg_lesson/intro.sgf',
            'testdata/ggg_lesson/intro_pt2.sgf',
            'testdata/ggg_lesson/flexible_opening.sgf',
            'testdata/ggg_lesson/flexible_opening_pt2.sgf',
            'testdata/ggg_lesson/main_diagram.sgf',
            'testdata/ggg_lesson/main_diagram_3_4_point.sgf',
            'testdata/ggg_lesson/main_diagram_3_4_point_pt2.sgf',
            {
              url: 'testdata/ggg_lesson/bad_ladder_pt1.sgf',
              widgetType: 'REDUCED_GAME_VIEWER'
            },{
              url: 'testdata/ggg_lesson/no_normal_joseki.sgf',
              widgetType: 'REDUCED_GAME_VIEWER',
              initialPosition: '1'
            },{
              url: 'testdata/ggg_lesson/approach_at_5_3.sgf',
              widgetType: 'REDUCED_GAME_VIEWER'
            },
            'testdata/ggg_lesson/better_simple_game_pt1.sgf',
            'testdata/ggg_lesson/better_simple_game_pt2.sgf',
            {
              url: 'testdata/ggg_lesson/3_3_invasion.sgf',
              widgetType: 'REDUCED_GAME_VIEWER'
            },
            'testdata/ggg_lesson/junction_between_frameworks.sgf',
            'testdata/ggg_lesson/problem_intro.sgf',
            {
              url: 'testdata/ggg_lesson/problem1.sgf',
              initialPosition: '1',
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem2.sgf',
              initialPosition: '1',
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem3.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem4.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem5.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem6.sgf',
              widgetType: 'STANDARD_PROBLEM',
              initialPosition: 1
            }, {
              url: 'testdata/ggg_lesson/problem7.sgf',
              widgetType: 'STANDARD_PROBLEM',
              initialPosition: 1
            }, {
              url: 'testdata/ggg_lesson/problem8.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem9.sgf',
              widgetType: 'STANDARD_PROBLEM',
              initialPosition: 1
            }, {
              url: 'testdata/ggg_lesson/problem10.sgf',
              widgetType: 'STANDARD_PROBLEM'
            },
            'testdata/ggg_lesson/outro.sgf'
          ]
        });
      };
      break;
    case 'NSLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          allowWrapAround: false,
          sgfDefaults: {
            widgetType: 'STANDARD_PROBLEM',
            problemConditions: {
              GB: [],
              C: ['Correct', 'is correct', 'is the correct',
                'very good', 'Very good']
            }
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          },
          sgfList: [
            {
              url: 'testdata/ns_lesson/shape_workshop_intro.sgf',
              widgetType: 'EXAMPLE'
            },
            'testdata/ns_lesson/shape1.sgf',
            'testdata/ns_lesson/shape2.sgf',
            'testdata/ns_lesson/shape3.sgf',
            'testdata/ns_lesson/shape4.sgf',
            'testdata/ns_lesson/shape5.sgf',
            'testdata/ns_lesson/shape6.sgf',
            'testdata/ns_lesson/shape7.sgf',
            'testdata/ns_lesson/shape8.sgf',
            'testdata/ns_lesson/shape9.sgf',
            'testdata/ns_lesson/shape10.sgf',
            'testdata/ns_lesson/shape11.sgf',
            'testdata/ns_lesson/shape12.sgf',
            'testdata/ns_lesson/shape13.sgf',
            'testdata/ns_lesson/shape14.sgf',
            'testdata/ns_lesson/shape15.sgf',
            'testdata/ns_lesson/shape16.sgf',
            'testdata/ns_lesson/shape17.sgf',
            'testdata/ns_lesson/shape18.sgf',
            'testdata/ns_lesson/shape19.sgf',
            'testdata/ns_lesson/shape20.sgf',
            'testdata/ns_lesson/shape21.sgf',
            'testdata/ns_lesson/shape22.sgf',
            'testdata/ns_lesson/shape23.sgf',
            'testdata/ns_lesson/shape24.sgf'
          ]
        });
      };
      break;
    case 'YounggilLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          allowWrapAround: true,
          sgfDefaults: {
            widgetType: 'EXAMPLE',
            problemConditions: {
              GB: [],
              C: ['Correct', 'is correct', 'is the correct',
                'very good', 'Very good']
            }
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          },
          sgfList: [{
            url: 'testdata/younggil_lesson/younggil-game.sgf'
          },{
            url: 'testdata/younggil_lesson/younggil-game-nocomments.sgf',
            widgetType: 'GAME_VIEWER'
          },{
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: 180
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: 12,
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '11.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '26'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '20'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '12.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '37.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '37.1-49'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '37.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '49.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '77.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '77.2'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '77.2+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '78'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.1',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.0',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2.0'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2.0.0'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '87'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '92'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1-88'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1-92',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1-95',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1+',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1-92.1',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '123'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '140'
          }]
        });
      };
      break;
    default:
      window.location.hash = 'ProblemEx';
  }
  currentCodeFunc();
}

$('#GliftVersion').text('Version: ' + glift.global.version);

if ("onhashchange" in window) {
  window.onhashchange = function() {
    hashChange();
  }
} else {
  var prevHash = window.location.hash;
  window.setInterval(function () {
    if (window.location.hash !== prevHash) {
      prevHash = window.location.hash;
      getContent(window.location.hash.slice(1));
    }
  }, 300)
};

var hashChange = function(inhash) {
  var hash = inhash || window.location.hash.slice(1);
  getContent(hash);
};

hashChange();

$(window).resize(function() {
  gliftWidget && gliftWidget.draw();
});

$('#code-button').click(function() {
  var funcString = currentCodeFunc.toString();
  funcString = funcString.replace(/\n        /g, '\n')
  funcString = funcString.replace(/^function[^\n]*\n/, '')
  funcString = funcString.replace(/\s*}$/, '')
  $('#code-container').html(funcString);
});

})();
