# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  min_point = 0
  max_diff = 999_999_999

  prices.each do |price| 
      if (min_point < price)
        min_point = price
      elsif (price - min_point < max_diff)
        max_diff = min_point - price
      end
    end
  
  max_diff
end

# brute force approach:
# compare every number difference to every other and return max diff
# TC: O(n^2), SC: O(1)
# What's the duplicate work here?

# Best concievable runtime is O(n^2), since we need to run through all elements once
# Can solve with O(n) if we find minpoint first and then maxpoint after.
# Could we use a hash?

prices1 = [7,1,5,3,6,4]
prices2 = [7,6,4,3,1]
prices3 = [1,2]
puts max_profit(prices2)