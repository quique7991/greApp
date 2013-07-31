/*
 * File: app/view/MyList.js
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

Ext.define('MyApp.view.MyList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.mylist',

    config: {
        id: 'myList',
        store: 'MyXmlStore',
        grouped: true,
        indexBar: true,
        itemTpl: [
            '<div> <font size="5">{word} </font> <b> <br> Definition: </b> <i>{definition} </i> <br> <b> Type: </b> <i>{type} </i> </div>'
        ],
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Words'
            },
            {
                xtype: 'searchfield',
                centered: false,
                docked: 'top',
                itemId: 'mysearchfield',
                label: 'Search'
            }
        ],
        listeners: [
            {
                fn: 'onMysearchfieldKeyup',
                event: 'keyup',
                delegate: '#mysearchfield'
            }
        ]
    },

    onMysearchfieldKeyup: function(textfield, e, eOpts) {
        var value = textfield.getValue();//Get the textfield value;
        store = Ext.getStore('MyXmlStore');//getting the store that drives the xml store
        store.clearFilter();
        var x = 0;

        if(value){//>check first if value is set.
            //if(false){
            /* var searches = value.split(' '),
            regexps = [],  
            i;  

            for(i = 0; i < searches.length;i++){
            if(!searches[i]) continue;
            regexps.push(new RegExp(searches[i],"i"));        
            }
            store.filter(function(record) {  
            var matched = [];
            //loop through each of the regular expressions  

            //for (i = 0; i < regexps.length; i++) {  
            //alert(i);
            //var search = ;
            var   didMatch = record.get('word').match(regexps[0]);

            matched.push(didMatch);  

            //}  //if nothing was found, return false (dont so in the store)                 

            if (regexps.length > 1 && matched.indexOf(false) != -1) {  
                return false;  
            } else {  
                //else true true (show in the store)  
                return matched[0];  
            }  
        });*/
        store.filter("word",value);
        //store.filterBy()
    }


    }

});