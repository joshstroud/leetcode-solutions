# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
  third_elements = Hash.new(false)
  solution_set = []
  
  nums.each do |num|
    third_elements[num] = true
  end 
  
  for num1_index in 0...nums.length do 
    num1 = nums[num1_index]
    
    for num2_index in num1_index...nums.length do
      num2 = nums[num2_index]   
      num3 = -1 * (num1 + num2)

      if third_elements[num3]
        solution_set << [num1, num2, num3]
      end
    end
  end
    
  solution_set.uniq
end

# Brute force: iterate through every potential combination, TC: O(n^3)
# Could we use a hash to lookup final number to resolve sum? Reduces TC to O(n^2) with a space complexity of O(n)
# Best concievable runtime is O(n) because we need to run through all elements at least once
# Could we use a sort and binary search? Doesn't work
# [-4, -1, -1, 0, 1, 2]
# In our answer, we notice tons of duplicated work - we are checking a solution set several times. How can we reduce this duplicated work?
# Could we store pairs of numbers sums in hash too? And then lookup number in hash. 

arr = [-1, 0, 1, 2, -1, -4]
puts three_sum(arr)