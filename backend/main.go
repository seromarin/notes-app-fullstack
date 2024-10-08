// Code generated by hertz generator.

package main

import (
	"context"
	"log"
	"strconv"

	"github.com/cloudwego/hertz/pkg/app"
	"github.com/cloudwego/hertz/pkg/app/server"
	"github.com/cloudwego/hertz/pkg/common/utils"
	"github.com/cloudwego/hertz/pkg/protocol/consts"
	"github.com/joho/godotenv"
)

type Todo struct {
	ID        int    `json:"id"`
	Body      string `json:"body" vd:"len($)>0"`
	Completed bool   `json:"completed"`
}

func main() {
	// Load environment variables.
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	h := server.Default()

	h.GET("/ping", func(ctx context.Context, c *app.RequestContext) {
		c.JSON(consts.StatusOK, utils.H{"message": "pong"})
	})

	// The todos list.
	todos := []Todo{}

	// Get all todos.
	h.GET("/api/todos", func(ctx context.Context, c *app.RequestContext) {
		c.JSON(consts.StatusOK, todos)
	})

	// Create a new todo.
	h.POST("/api/todos", func(ctx context.Context, c *app.RequestContext) {
		todo := &Todo{}

		if err := c.BindAndValidate(todo); err != nil {
			c.JSON(consts.StatusBadRequest, utils.H{"error": err.Error()})
			return
		}

		todo.ID = len(todos) + 1
		todos = append(todos, *todo)

		c.JSON(consts.StatusCreated, todo)
	})

	// Update a todo.
	h.PATCH("/api/todos/:id", func(ctx context.Context, c *app.RequestContext) {
		idStr := c.Param("id")
		id, err := strconv.Atoi(idStr)
		if err != nil {
			c.JSON(consts.StatusBadRequest, utils.H{"error": "invalid id"})
			return
		}

		todo := &Todo{}

		if err := c.BindAndValidate(todo); err != nil {
			c.JSON(consts.StatusBadRequest, utils.H{"error": err.Error()})
			return
		}

		for i, t := range todos {
			if id == t.ID {
				todos[i].Body = todo.Body
				todos[i].Completed = todo.Completed
				c.JSON(consts.StatusOK, todos[i])
				return
			}
		}

		c.JSON(consts.StatusNotFound, utils.H{"error": "todo not found"})
	})

	// Delete a todo.
	h.DELETE("/api/todos/:id", func(ctx context.Context, c *app.RequestContext) {
		idStr := c.Param("id")
		id, err := strconv.Atoi(idStr)
		if err != nil {
			c.JSON(consts.StatusBadRequest, utils.H{"error": "invalid id"})
			return
		}

		for i, t := range todos {
			if id == t.ID {
				todos = append(todos[:i], todos[i+1:]...)
				c.JSON(consts.StatusOK, utils.H{"success": true})
				return
			}
		}

		c.JSON(consts.StatusNotFound, utils.H{"error": "todo not found"})
	})

	h.Spin()
}
