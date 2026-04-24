module Jekyll
  module HideCustomBibtex
    HIDDEN_FIELDS = %w[
      abbr
      award
      selected
      bibtex_show
      preview
      open_review
      conference_view
      official_link
      code
      poster
      slides
      video
      expo_talk
      expo_talk_slides
      note
      pdf
      defense_post
      dissertation_page
      ut_linguistics_news
    ].freeze

    def hideCustomBibtex(input)
      lines = input.lines
      filtered = lines.reject do |line|
        stripped = line.strip.downcase
        HIDDEN_FIELDS.any? { |field| stripped.start_with?("#{field} =", "#{field}=") }
      end
      filtered.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)