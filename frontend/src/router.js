import { createRouter, createWebHistory } from 'vue-router'
import { usersStore } from './stores/user'
import { sessionStore } from './stores/session'

let defaultRoute = '/courses'
const routes = [
	{
		path: '/',
		redirect: {
			name: 'Home',
		},
	},
	{
		path: '/lms/courses',
		name: 'Courses',
		component: () => import('@/pages/Courses.vue'),
	},
	{
		path: '/lms/courses/:courseName',
		name: 'CourseDetail',
		component: () => import('@/pages/CourseDetail.vue'),
		props: true,
	},
	{
		path: '/lms/courses/:courseName/learn/:chapterNumber-:lessonNumber',
		name: 'Lesson',
		component: () => import('@/pages/Lesson.vue'),
		props: true,
	},
	{
		path: '/lms/batches',
		name: 'Batches',
		component: () => import('@/pages/Batches.vue'),
	},
	{
		path: '/lms/batches/details/:batchName',
		name: 'BatchDetail',
		component: () => import('@/pages/BatchDetail.vue'),
		props: true,
	},
	{
		path: '/lms/batches/:batchName',
		name: 'Batch',
		component: () => import('@/pages/Batch.vue'),
		props: true,
	},
	{
		path: '/lms/billing/:type/:name',
		name: 'Billing',
		component: () => import('@/pages/Billing.vue'),
		props: true,
	},
	{
		path: '/lms/statistics',
		name: 'Statistics',
		component: () => import('@/pages/Statistics.vue'),
	},
	{
		path: '/lms/user/:username',
		name: 'Profile',
		component: () => import('@/pages/Profile.vue'),
		props: true,
		redirect: { name: 'ProfileAbout' },
		children: [
			{
				name: 'ProfileAbout',
				path: '',
				component: () => import('@/pages/ProfileAbout.vue'),
			},
			{
				name: 'ProfileCertificates',
				path: 'certificates',
				component: () => import('@/pages/ProfileCertificates.vue'),
			},
			{
				name: 'ProfileRoles',
				path: 'roles',
				component: () => import('@/pages/ProfileRoles.vue'),
			},
			{
				name: 'ProfileEvaluator',
				path: 'evaluations',
				component: () => import('@/pages/ProfileEvaluator.vue'),
			},
		],
	},
	{
		path: '/lms/job-openings',
		name: 'Jobs',
		component: () => import('@/pages/Jobs.vue'),
	},
	{
		path: '/lms/job-openings/:job',
		name: 'JobDetail',
		component: () => import('@/pages/JobDetail.vue'),
		props: true,
	},
	{
		path: '/lms/courses/:courseName/edit',
		name: 'CourseForm',
		component: () => import('@/pages/CourseForm.vue'),
		props: true,
	},
	{
		path: '/lms/courses/:courseName/learn/:chapterNumber-:lessonNumber/edit',
		name: 'LessonForm',
		component: () => import('@/pages/LessonForm.vue'),
		props: true,
	},
	{
		path: '/lms/batches/:batchName/edit',
		name: 'BatchForm',
		component: () => import('@/pages/BatchForm.vue'),
		props: true,
	},
	{
		path: '/lms/job-opening/:jobName/edit',
		name: 'JobCreation',
		component: () => import('@/pages/JobCreation.vue'),
		props: true,
	},
	{
		path: '/lms/assignment-submission/:assignmentName/:submissionName',
		name: 'AssignmentSubmission',
		component: () => import('@/pages/AssignmentSubmission.vue'),
		props: true,
	},
	{
		path: '/lms/certified-participants',
		name: 'CertifiedParticipants',
		component: () => import('@/pages/CertifiedParticipants.vue'),
	},
	{
		path: '/lms/notifications',
		name: 'Notifications',
		component: () => import('@/pages/Notifications.vue'),
	},
	{
		path: '/lms/badges/:badgeName/:email',
		name: 'Badge',
		component: () => import('@/pages/Badge.vue'),
		props: true,
	},
	{
		path: '/lms/quizzes',
		name: 'Quizzes',
		component: () => import('@/pages/Quizzes.vue'),
	},
	{
		path: '/lms/quizzes/:quizID',
		name: 'QuizCreation',
		component: () => import('@/pages/QuizCreation.vue'),
		props: true,
	},
]

let router = createRouter({
	history: createWebHistory(''),
	routes,
})

router.beforeEach(async (to, from, next) => {
	const { userResource, allUsers } = usersStore()
	let { isLoggedIn } = sessionStore()

	try {
		if (isLoggedIn) {
			await userResource.promise
		}
		if (
			isLoggedIn &&
			(to.name == 'Lesson' ||
				to.name == 'Batch' ||
				to.name == 'Notifications' ||
				to.name == 'Badge')
		) {
			await allUsers.promise
		}
	} catch (error) {
		isLoggedIn = false
	}
	return next()
})

export default router
