var app = app || {};

var TodoList = Backbone.Collection.extend({
    model : app.Todo,

    localStorage : new Backbone.LocalStorage('todos-backbone'),

    //返回已完成的todo项
    completed : function(){
        return this.filter(function(todo){
            return todo.get('completed');
        });
    },

    //返回未完成的todo项
    remaining : function(){
        return this.without.apply(this,this.completed())
    },

    //序列产生器
    nextOrder : function(){
        if(!this.length){
            return 1;
        }
        return this.last().get('order') + 1;
    },

    //排序
    comparator : function(todo){
        return todo.get('order');
    }
});


app.Todos = new TodoList();