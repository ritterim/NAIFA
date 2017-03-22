# https://gist.github.com/nicolashery/5756478
# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
      site.config['zendesk_url'] = ENV['ZENDESK_URL']
    end

  end

end
