function AllMeetup() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllMeetup />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/new-meetup" element={<NewMeetup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AllMeetup;
