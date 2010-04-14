# ===========================================================================
# Project:   Locator
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, :scui]

config :locator do |c|
 c[:layout] = 'lib/index.html'
end