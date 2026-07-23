require "minitest/autorun"

class MapMyVisitorsLayoutTest < Minitest::Test
  LAYOUT_PATH = File.expand_path("../_layouts/default.html", __dir__)
  VALID_TOKEN = "nuvzYNrORqAKjMSEskF0tOsLT_GBVNLlK-0Zz8etIHw"

  def setup
    @layout = File.read(LAYOUT_PATH)
  end

  def test_uses_the_widget_token_from_the_authenticated_profile
    assert_includes @layout, "https://mapmyvisitors.com/globe.js?d=#{VALID_TOKEN}"
    refute_includes @layout, "mxIKLPa2szScMHgn1Idf08r09R_zEhFCMEm4Lm4Q5rE"
  end

  def test_keeps_one_measurable_invisible_tracker_container
    assert_equal 1, @layout.scan('id="mmvst_globe"').length
    assert_match(/class="mapmyvisitors-tracker"[^>]*aria-hidden="true"/, @layout)
    assert_match(
      /\.mapmyvisitors-tracker\s*\{[^}]*position:\s*absolute;[^}]*width:\s*200px;[^}]*height:\s*0;[^}]*overflow:\s*hidden;[^}]*visibility:\s*hidden;/m,
      @layout
    )
  end
end
