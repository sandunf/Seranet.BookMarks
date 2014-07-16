﻿(function () {


    var app = angular.module("app");


    app.service('appService', function () {
        this.availableApplist = function () {

            var applist = [
                           //{
                           //    "title": "Home",
                           //    "leftMeunuClass": "home-icon",
                           //    "appListLinkClass": "",
                           //    "applistMainClass": "",
                           //    "href": "#",
                           //    "description": "Lorem Ipsum"

                           //},
                           {
                                "title": "About Us",
                                "leftMeunuClass": "aboutus-icon",
                                "appListClass": "icon-user icon-4x",
                                "applistMainClass": "tile orange w2 h1 icon-featurecw title-fadeout",
                                "href": "#",
                                "description": "Perspiciatis unde"
                           },
                            {
                                "title": "Contact",
                                "leftMeunuClass": "contact-icon",
                                "appListClass": "icon-envelope icon-4x",
                                "applistMainClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                "href": "#",
                                "description": "Vestibulum cursus"
                          }
            ]
            return applist;
        }

        this.defaultAppList = function () {
            var applist =  [
                           {
                               "title": "About Us",
                               "leftMeunuClass": "aboutus-icon",
                               "appListClass": "icon-user icon-4x",
                               "applistMainClass": "tile orange w2 h1 icon-featurecw title-fadeout",
                               "href": "#",
                               "description": "Perspiciatis unde"

                          }, 
                           // {
                           //     "title": "Contact",
                           //     "leftMeunuClass": "contact-icon",
                           //     "appListClass": "icon-envelope icon-4x",
                           //     "applistMainClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                           //     "href": "#",
                           //     "description": "Vestibulum cursus"
                           // }
            ]

            return applist;
        };
    });


})();