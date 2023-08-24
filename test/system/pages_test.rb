require "application_system_test_case"

class PagesTest < ApplicationSystemTestCase

  test 'visiting the index' do
    visit '/'

    assert_selector 'h1', text: 'Compound interest calculator'
  end

  test 'Final balance matches expected based on 10k with interest 1.1% for 3 years, interest paid monthly' do
    visit '/'

    fill_in 'deposit', with: 10_000
    fill_in 'interest', with: 1.1
    fill_in 'termyears', with: 3

    click_on 'Calculate'

    assert_selector '.results', text: 'Final Balance: $10335'
  end
end
