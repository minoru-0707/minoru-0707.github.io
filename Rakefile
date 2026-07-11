require 'date'
require 'fileutils'

desc "新しいブログ記事を作成（HTML拡張子・初期テンプレート完全再現版）"
task :post do
    # 1. タイトルの入力を促す
    print "記事のタイトルを入力してください: "
    raw_title = STDIN.gets.strip
    raw_title = "article" if raw_title.empty?

    # ファイル名（スラッグ）用に安全な文字に変換
    slug = raw_title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    slug = "new-article" if slug.empty?

    # 2. 今日の日付と現在時刻を取得
    date_str = Date.today.strftime('%Y-%m-%d')
    current_time = Time.now.strftime('%Y-%m-%d %H:%M:%S %z')
    
    # 3. 拡張子を .html に変更してファイルパスを生成
    dir = "_posts"
    filename = "#{date_str}-#{slug}.html"
    path = File.join(dir, filename)

    # 🔥 【名前被り防御】すでにファイルが存在する場合は、末尾に -1, -2 と自動でナンバリング
    counter = 1
    while File.exist?(path)
    filename = "#{date_str}-#{slug}-#{counter}.html"
    path = File.join(dir, filename)
    counter += 1
    end

    # 4. フォルダを作成し、ご提示いただいたテンプレートを100%再現して書き込み
    FileUtils.mkdir_p(dir)
    File.open(path, "w") do |f|
    f.puts "---"
    f.puts "last_modified_at: #{current_time}"
    f.puts "layout: post"
    f.puts "title: \"#{raw_title}\""
    f.puts "category: 日記"
    f.puts "image: " # 空の状態で用意（必要に応じて後からパスを記入）
    f.puts "---"
    f.puts ""
    f.puts "<p>ここに記事の内容を記入します。</p>"
    f.puts ""
    end

    puts "✨ テンプレート記事（HTML）が生成されました: #{path}"
end