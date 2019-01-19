class TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def show
    todo = Todo.find(params[:id])
    render json: {todo: todo}
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: { errors: todo.errors }, status: :unproccessable_entity
    end
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(complete: !todo.complete)
    render json: todo
  end

  def destroy
    Todo.find(params[:id]).destroy
    render json: { message: 'Todo Deleted' }
  end

private
  def todo_params
    params.require(:todo).permit(:title, :done, :user_id)
  end
end
