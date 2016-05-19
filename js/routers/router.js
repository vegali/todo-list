var WorkSpace = Backbone.Router.extend({
    routes : {
        '*filter' : 'setFilter'
    },

    setFilter : function(param){
        app.TodoFilter = param || '';//书上的示例缺少这一行
        window.app.Todos.trigger('filter');
    }
});

app.TodoRouter = new WorkSpace();
Backbone.history.start();
