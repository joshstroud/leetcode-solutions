# @param {Integer[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def game_of_life(board)
  new_board = []

  board.each_with_index do |row, row_idx|
    new_board << []

    row.each_with_index do |col, col_idx|
      next_state = compute_state(board, row_idx, col_idx)
      new_board[row_idx] << next_state
    end
  end
  
  new_board
end
  
def compute_state(board, row_idx, col_idx) 
  prev_state = board[row_idx][col_idx]
  state = 0
  num_neighbors = 0
  ((row_idx - 1).upto(row_idx + 1)).each do |current_row_idx|
    ((col_idx - 1)..(col_idx + 1)).each do |current_col_idx|
      if (current_row_idx >= 0 && current_row_idx < board.length && current_col_idx >= 0 && current_col_idx < board[0].length)
        
        num_neighbors += board[current_row_idx][current_col_idx]
      end
    end
  end
    
  puts "[#{row_idx}, #{col_idx}]: #{prev_state}, num_neighbors #{num_neighbors}"
    if (prev_state == 1)
      if (num_neighbors < 2)
        return 0
      elsif (num_neighbors <= 3) 
        return 1
      else
        return 0
      end
    elsif (num_neighbors === 3)
      return 1
    else 
      return 0
    end
end
# Brute force: iterate through each cell, computing value from surrounding cells and placing in a new board. Time complexity: O(n) since constant set of ops for each cell
# Need to handle sides
# How would we do it in-place?
# Other ways to model the board?

board = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

p game_of_life(board)
# p compute_state(board, 0, 0)