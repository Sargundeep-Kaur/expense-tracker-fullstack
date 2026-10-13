package com.expense.tracker.service;

import com.expense.tracker.model.Expense;
import com.expense.tracker.dto.CategorySummaryDTO;
import com.expense.tracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public List<Expense> getAllExpenses(Long userId) {
        return expenseRepository.findAllByUserIdOrderByCreatedAtDesc(userId);
    }

    public Double getTotalSpending(Long userId) {
        Double total = expenseRepository.getTotalSpending(userId);
        return total != null ? total : 0.0;
    }

    public List<CategorySummaryDTO> getCategorySummary(Long userId) {
        return expenseRepository.getCategorySummary(userId);
    }
}
