package com.expense.tracker.repository;

import com.expense.tracker.model.Expense;
import com.expense.tracker.dto.CategorySummaryDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findAllByUserIdOrderByCreatedAtDesc(Long userId);

    @Query("SELECT SUM(e.amount) FROM Expense e WHERE e.userId = :userId")
    Double getTotalSpending(@Param("userId") Long userId);

    @Query("SELECT new com.expense.tracker.dto.CategorySummaryDTO(e.category, SUM(e.amount)) FROM Expense e WHERE e.userId = :userId GROUP BY e.category")
    List<CategorySummaryDTO> getCategorySummary(@Param("userId") Long userId);
}
