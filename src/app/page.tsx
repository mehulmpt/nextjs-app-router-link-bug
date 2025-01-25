import Link from 'next/link'

const home = () => {
	return (
		<div>
			<Link href="http://localhost:3000/link?productid=1">link1</Link>
			<br />
			<Link href="http://localhost:3000/link?productid=2">link2</Link>
			<br />
			<Link href="http://localhost:3000/link?productid=3">link3</Link>
			<br />
			<Link href="http://localhost:3000/link?productid=4">link4</Link>
		</div>
	)
}

export default home
