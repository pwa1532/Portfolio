#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import logging
import random
import wsgiref.handlers
import datetime
from datetime import timedelta

from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template
from google.appengine.ext import db
from google.appengine.api import users
from google.appengine.api import mail


class Sleepy(db.Model):
	user = db.IntegerProperty()
	light = db.IntegerProperty()
	sleepy = db.IntegerProperty()
	time = db.DateTimeProperty()

class Nightlight(db.Model):
	user = db.IntegerProperty()
	q1 = db.IntegerProperty()
	q2 = db.IntegerProperty()
	q3 = db.IntegerProperty()
	q4 = db.IntegerProperty()
	q5 = db.IntegerProperty()
	q6 = db.IntegerProperty()
	q7 = db.IntegerProperty()
	q8 = db.IntegerProperty()
	q9 = db.IntegerProperty()
	q10 = db.IntegerProperty()
	q11 = db.IntegerProperty()
	q12 = db.IntegerProperty()
	q13 = db.IntegerProperty()
	q14 = db.IntegerProperty()
	q15 = db.IntegerProperty()
	q16 = db.IntegerProperty()
	q17 = db.IntegerProperty()
	q18 = db.IntegerProperty()
	q19 = db.IntegerProperty()
	q20 = db.IntegerProperty()
	score = db.IntegerProperty()
	comment = db.StringProperty()
	time = db.DateTimeProperty()

class MainHandler(webapp.RequestHandler):

	def get(self):
		path = self.request.path
		if path == "/color":
			content = os.path.join(os.path.dirname(__file__), 'templates/infovis/color.html')
		elif path == "/gradient":
			content = os.path.join(os.path.dirname(__file__), 'templates/infovis/gradient.html')
		elif path == "/moodlightingviewer":
			content = os.path.join(os.path.dirname(__file__), 'templates/moodlightingviewer.html')
			all = Moodlighting.all()
			outstr = template.render(content, { 'all': all})
			self.response.out.write(outstr)
			return
		elif path == "/nightlightsubmit":
			content = os.path.join(os.path.dirname(__file__), 'templates/nightlightsubmit.html')
			
			nl = Nightlight()
			
			nl.user = int(self.request.get('name'))
			nl.q1 = int(self.request.get('q1'))
			nl.q2 = int(self.request.get('q2'))
			nl.q3 = int(self.request.get('q3'))
			nl.q4 = int(self.request.get('q4'))
			nl.q5 = int(self.request.get('q5'))
			nl.q6 = int(self.request.get('q6'))
			nl.q7 = int(self.request.get('q7'))
			nl.q8 = int(self.request.get('q8'))
			nl.q9 = int(self.request.get('q9'))
			nl.q10 = int(self.request.get('q10'))
			nl.q11 = int(self.request.get('q11'))
			nl.q12 = int(self.request.get('q12'))
			nl.q13 = int(self.request.get('q13'))
			nl.q14 = int(self.request.get('q14'))
			nl.q15 = int(self.request.get('q15'))
			nl.q16 = int(self.request.get('q16'))
			nl.q17 = int(self.request.get('q17'))
			nl.q18 = int(self.request.get('q18'))
			nl.q19 = int(self.request.get('q19'))
			nl.q20 = int(self.request.get('q20'))
			nl.comment = self.request.get('comment')
			score = nl.q1 + nl.q2 + nl.q3 + nl.q4 + nl.q5 + nl.q6 + nl.q7 + nl.q8 + nl.q9 + nl.q10 + nl.q11 + nl.q12 + nl.q13 + nl.q14 + nl.q15 + nl.q16 + nl.q17 + nl.q18 + nl.q19 + nl.q20
			nl.score = score
			
			year = int(self.request.get('year'))
			month = int(self.request.get('month'))
			day = int(self.request.get('day'))
			hour = int(self.request.get('hour'))
			minute = int(self.request.get('minute'))
		
			dt = datetime.datetime(year, month, day, hour, minute)
			nl.time = dt
			nl.put()
			all = {'user':int(self.request.get('name')), 'score':score, 'comment':nl.comment, 'time':dt}
		
			outstr = template.render(content, { 'thing': all})
			self.response.out.write(outstr)
			return
		elif path == "/nightlight":
			content = os.path.join(os.path.dirname(__file__), 'templates/nightlight.html')
			delta = datetime.timedelta(hours = -4)
			now = datetime.datetime.now()
			now = now + delta
			day = now.day
			month = now.month
			hour = now.hour
			minute = now.minute
			outstr = template.render(content, { 'day': day, 'month': month, 'hour':hour, 'minute':minute})
			self.response.out.write(outstr)
			return
			
		elif path == "/moodlightingsubmit" or path == "/moodlightingsubmit.html":
			content = os.path.join(os.path.dirname(__file__), 'templates/moodlightingsubmit.html')
			
			sl = Sleepy()
			
			sl.user = int(self.request.get('name'))
			sl.light = int(self.request.get('light'))
			sl.sleepy = int(self.request.get('sleepy'))
			year = int(self.request.get('year'))
			month = int(self.request.get('month'))
			day = int(self.request.get('day'))
			hour = int(self.request.get('hour'))
			minute = int(self.request.get('minute'))
		
			dt = datetime.datetime(year, month, day, hour, minute)
			sl.time = dt
			sl.put()
			all = Sleepy.all()
			all = {'user':int(self.request.get('name')), 'light':int(self.request.get('light')), 'sleepy':int(self.request.get('sleepy')), 'time':dt}
		
			outstr = template.render(content, { 'thing': all})
			self.response.out.write(outstr)
			return
		elif path == "/moodlighting":
			content = os.path.join(os.path.dirname(__file__), 'templates/moodlighting.html')
			delta = datetime.timedelta(hours = -4)
			now = datetime.datetime.now()
			now = now + delta
			day = now.day
			month = now.month
			hour = now.hour
			minute = now.minute
			outstr = template.render(content, { 'day': day, 'month': month, 'hour':hour, 'minute':minute})
			self.response.out.write(outstr)
			return
		elif path == "/sendMessage":
			my_email = self.request.get('email')
			my_subject = self.request.get('subject')
			my_body = self.request.get('message')
			message = mail.EmailMessage(sender="pwa1532@gmail.com",subject=my_subject)

			message.to = "pwa1532@gmail.com"
			message.body = "message: " + my_body + " email: " + my_email

			message.send()
			self.response.out.write("win")
			return
		
		else:
			content = os.path.join(os.path.dirname(__file__), 'templates/%s' % path)
		if not os.path.isfile(content):
			content = os.path.join(os.path.dirname(__file__), 'templates/projects.html')
			path = "/projects.html"
			
		interest_urls = ('articles/first.html','articles/first.html')
		projects = ('Quicken Loans','SocialU', 'Information Visualization', 'Pervasive Interaction Design', 'Adler','UMHS PEC', 'Community Capture', 'Steps','Lecture Tools')
		project_urls = ('quicken_mini.html','socialu_mini.html', 'infovis_mini.html', 'pervasive_mini.html', 'adler_mini.html','pec_mini.html','commcap_mini.html', 'steps_mini.html','lecture_tools_mini.html')
		category = self.request.get('category')
		if category == "development":
			projects = ('Information Visualization', 'Adler', 'Steps','Lecture Tools')
			project_urls = ('infovis_mini.html','adler_mini.html','steps_mini.html','lecture_tools_mini.html')
		elif category == "design":
			projects = ('Quicken Loans','SocialU', 'Information Visualization', 'Pervasive Interaction Design', 'Adler','Community Capture')
			project_urls = ('quicken_mini.html','socialu_mini.html', 'infovis_mini.html', 'pervasive_mini.html','adler_mini.html','commcap_mini.html')
		elif category == "evaluation":
			projects = ('Quicken Loans','SocialU', 'Pervasive Interaction Design', 'Adler','UMHS PEC')
			project_urls = ('quicken_mini.html','socialu_mini.html', 'pervasive_mini.html', 'adler_mini.html','pec_mini.html')
			
		outstr = template.render(content, { 'path': path, 'project_urls':project_urls, 'projects':projects, 'interest_urls':interest_urls })
		self.response.out.write(outstr)


def main():
    application = webapp.WSGIApplication([('/.*', MainHandler)],
                                         debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
