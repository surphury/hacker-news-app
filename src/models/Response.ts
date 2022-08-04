export interface Response {
	hits: {
		created_at: string;
		title: null | string;
		url: null | string;
		author: string;
		points: null;
		story_text: null | string;
		comment_text: string;
		num_comments: null | number;
		story_id: number;
		story_title: string;
		story_url: string;
		parent_id: number;
		created_at_i: number;
		_tags: string[];
		objectID: string;
		_highlightResult: {
			author: {
				value: string;
				matchLevel: string;
				matchedWords: string[];
			};
			comment_text: {
				value: string;
				matchLevel: string;
				fullyHighlighted: boolean;
				matchedWords: 'angular' | 'react' | 'vue';
			};
			story_title: {
				value: string;
				matchLevel: string;
				matchedWords: string[];
			};
			story_url: {
				value: string;
				matchLevel: string;
				matchedWords: string[];
			};
		};
	}[];
	nbHits: number;
	page: number;
	nbPages: number;
	hitsPerPage: number;
	exhaustiveNbHits: boolean;
	exhaustiveTypo: boolean;
	query: string;
	params: string;
	processingTimeMS: number;
}
