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
    if todo.update(todo_params)
      render json: todo
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Todo.find(params[:id]).destroy
    render json: { message: 'Todo Deleted' }
  end

private

  def todo_params
    params.require(:todo).permit(:title, :body, :owner, :duedate, :user_id)
  end
end
