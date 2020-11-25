export interface GHRepo{
    name: string;
    description: string;
    full_name: string;
    git_url: string;
    forks_count: number;
    stargazers_count: number;
    html_url: string;
    homepage: string;
    language: string;
    private: boolean;
    open_issues_count:  number;
    updated_at: string;
    watchers_count: number;
}