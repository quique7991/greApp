/*
 * File: app/view/MyContainer.js
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

Ext.define('MyApp.view.MyContainer', {
    extend: 'Ext.Container',
    alias: 'widget.mycontainer',

    config: {
        id: 'myContainer',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'XMLReader'
            },
            {
                xtype: 'image',
                height: '40%',
                itemId: 'myimg',
                top: '20%',
                width: '100%',
                src: 'http://www.skill-guru.com/gre/wp-content/uploads/2011/02/GRE.jpg'
            }
        ],
        listeners: [
            {
                fn: 'onMyimgTap',
                event: 'tap',
                delegate: '#myimg'
            }
        ]
    },

    onMyimgTap: function(image, e, eOpts) {
        Ext.getCmp('tabPanel').setActiveItem(Ext.getCmp('myList'));
    }

});