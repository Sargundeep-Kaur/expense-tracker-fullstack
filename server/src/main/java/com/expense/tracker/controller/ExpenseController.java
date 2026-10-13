package com.expense.tracker.controller;

import com.expense.tracker.model.Expense;
import com.expense.tracker.dto.CategorySummaryDTO;
import com.expense.tracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") 
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense) {
        return ResponseEntity.ok(expenseService.addExpense(expense));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Expense>> getAllExpenses(@PathVariable Long userId) {
        return ResponseEntity.ok(expenseService.getAllExpenses(userId));
    }

    @GetMapping("/user/{userId}/total")
    public ResponseEntity<Double> getTotalSpending(@PathVariable Long userId) {
        return ResponseEntity.ok(expenseService.getTotalSpending(userId));
    }

    @GetMapping("/user/{userId}/category-summary")
    public ResponseEntity<List<CategorySummaryDTO>> getCategorySummary(@PathVariable Long userId) {
        return ResponseEntity.ok(expenseService.getCategorySummary(userId));
    }
}
