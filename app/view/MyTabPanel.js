/*
 * File: app/view/MyTabPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',

    requires: [
        'MyApp.view.MyContainer',
        'MyApp.view.MyList',
        'MyApp.view.MyContainer1'
    ],

    config: {
        id: 'tabPanel',
        items: [
            {
                xtype: 'mycontainer',
                iconCls: 'info'
            },
            {
                xtype: 'mylist',
                iconCls: 'info'
            },
            {
                xtype: 'mycontainer11',
                iconCls: 'info'
            }
        ],
        tabBar: {
            docked: 'bottom',
            hidden: true
        }
    }

});