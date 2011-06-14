Ext.define('PartKeepr.UserEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.UserEditorComponent',
	gridClass: 'PartKeepr.UserGrid',
	editorClass: 'PartKeepr.UserEditor',
	newItemText: i18n("New User"),
	deleteMessage: i18n("Do you really wish to delete the user '%s'?"),
	deleteTitle: i18n("Delete User"),
	initComponent: function () {
		this.createStore({
			model: "User",
			sorters: [{
	              property: 'username',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});